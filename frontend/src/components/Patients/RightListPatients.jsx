import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Content } from "./PatientLeftContent";
import { List } from "./PatientRightList";
import { FaPhone } from "react-icons/fa";
import { LiaAddressCardSolid } from "react-icons/lia";
import { TbUrgent } from "react-icons/tb";
import PropTypes from "prop-types";

RightListPatients.propTypes = {
	patients: PropTypes.array.isRequired,
	error: PropTypes.string.isRequired,
	filterPatient: PropTypes.string
};

export default function RightListPatients({ patients,  error, filterPatient}) {

	const filteredPatients = patients.filter(patient =>
		patient.name.toLowerCase().includes(filterPatient.toLowerCase())
	);

	return (
		<Grid item xs={8} sx={{ borderRadius: '10px'}}>
			{error ? (<p>{error}</p>) : (
        <>
          {filteredPatients.map((patient) => (
              <div key={patient.id} style={styleListItem}>
					<div><Content.ExibitionIcon /></div>
                <div>{patient.name} - {patient.age} anos | <FaPhone /> Telephone - {patient.phone} | <LiaAddressCardSolid />CEP - {patient.cep} | <TbUrgent /> Urgencia - {patient.urgency}</div>
					<div><List.RightArrow /></div>
              </div>
          ))}
        </>
      )}
		</Grid>
	)
}


const styleListItem = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	borderRadius: "20px",
	padding: "10px",
	margin: "10px",
	backgroundColor: 'rgb(228, 224, 224)'
}