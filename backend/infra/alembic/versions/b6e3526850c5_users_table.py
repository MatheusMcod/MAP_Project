"""users_table

Revision ID: b6e3526850c5
Revises: 92951e9663cd
Create Date: 2024-06-08 10:16:32.193439

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from infra.database.connection import DBConnectionHandler
from sqlalchemy import text

# revision identifiers, used by Alembic.
revision: str = 'b6e3526850c5'
down_revision: Union[str, None] = '92951e9663cd'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
  db_connection_handler = DBConnectionHandler()
  engine = db_connection_handler.get_engine()
  with engine.connect() as connection:
    connection.execute(text(
			'''
				CREATE TABLE users (
					id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
					username VARCHAR(255) NOT NULL,
					email VARCHAR(255) NOT NULL UNIQUE,
					password VARCHAR(255) NOT NULL
				)
			'''
  		)
		)


def downgrade() -> None:
  db_connection_handler = DBConnectionHandler()
  engine = db_connection_handler.get_engine()
  with engine.connect() as connection:
    connection.execute(text("DROP TABLE IF EXISTS users"))