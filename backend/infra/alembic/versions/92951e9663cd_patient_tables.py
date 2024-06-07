"""patient_tables

Revision ID: 92951e9663cd
Revises:
Create Date: 2024-05-31 14:26:42.180782

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from infra.database.connection import DBConnectionHandler
from sqlalchemy import text


# revision identifiers, used by Alembic.
revision: str = '92951e9663cd'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
  db_connection_handler = DBConnectionHandler()
  engine = db_connection_handler.get_engine()
  with engine.connect() as connection:
    connection.execute(text(
			'''
				CREATE TABLE patients (
					id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
					name VARCHAR(255) NOT NULL,
					work VARCHAR(255),
					age VARCHAR(255) NOT NULL,
					gender VARCHAR(255) NOT NULL,
					civil_status VARCHAR(255),
					address VARCHAR(255),
					cep VARCHAR(255),
					phone VARCHAR(255) NOT NULL,
					start_service VARCHAR(255) NOT NULL,
					end_service VARCHAR(255) NOT NULL,
					waiting_service VARCHAR(255),
					return_patient BOOLEAN NOT NULL,
					urgency VARCHAR(255) NOT NULL,
					problem VARCHAR(255) NOT NULL,
					description_problem VARCHAR(255) NOT NULL,
					attending_doctor VARCHAR(255)
				)
			'''
  		)
		)

  with engine.connect() as connection:
    connection.execute(text(
			'''
				CREATE TABLE patient_special_conditions (
					id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
					conditions VARCHAR(255),
					medicines VARCHAR(255),
					allergies VARCHAR(255),
					patient_id INTEGER,
					FOREIGN KEY (patient_id) REFERENCES patients(id)
				);
			'''
    	)
		)

def downgrade() -> None:
  db_connection_handler = DBConnectionHandler()
  engine = db_connection_handler.get_engine()

  with engine.connect() as connection:
    connection.execute(text("DROP TABLE IF EXISTS patient_special_conditions;"))

  with engine.connect() as connection:
    connection.execute(text("DROP TABLE IF EXISTS patients;"))

