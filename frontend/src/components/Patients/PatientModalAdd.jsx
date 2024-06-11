import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useState } from 'react';
import PropTypes from "prop-types";
import { Grid, TextField } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


PatientModalAdd.propTypes = {
	open: PropTypes.bool.isRequired,
	handleOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default function PatientModalAdd({ open, handleClose }) {
	const [patient, setPatient] = useState({
		name: "",
		work: "",
		age: "",
		gender: "",
		civil_status: "",
		address: "",
		cep: "",
		phone: "",
		start_service: "",
		end_service: "",
		waiting_service: "",
		return_patient: false,
		urgency: "",
		problem: "",
		description_problem: "",
		attending_doctor: "",
		special_conditions: {
			conditions: "",
			medicines: "",
			allergies: ""
		}
	})

	const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name in patient.special_conditions) {
      setPatient({
        ...patient,
        special_conditions: {
          ...patient.special_conditions,
          [name]: value
        }
      });
    } else {
			if (name == "return_patient") {
					setPatient({
						...patient,
						[name]: event.target.checked
					});
				} else {
					setPatient({
						...patient,
						[name]: value
					})
			}
		}
  };

	const handleSubmit = (event) => {
    event.preventDefault();
		console.log("OK")
  };

	const addPatient = async () => {
		try {
      const response = await fetch("http://localhost:4444/patient", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar dados! Status: ${response.status}`);
      }

      const data = await response.json();
			handleClose();
      console.log("Paciente adicionado com sucesso:", data);
    } catch (error) {
      console.error(error);
    }
	}

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box component="form" sx={modalStyle} noValidate autoComplete="off">
					<Typography variant="h4" component="div" gutterBottom>
						Ficha de Paciente
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<TextField fullWidth required id="outlined-required" label="Nome" name="name" value={patient.name} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={1}>
							<TextField fullWidth required id="outlined-number" label="Idade" name="age" value={patient.age} onChange={handleInputChange} variant="outlined" type="number"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Estado-Civil" value={patient.civil_status} onChange={handleInputChange} name="civil_status" variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="CEP" name="cep" value={patient.cep} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Endereço" name="address" value={patient.address} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Telephone" name="phone" value={patient.phone} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Gênero" name="gender" value={patient.gender} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Trabalho" name="work" value={patient.work} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Urgência" name="urgency" value={patient.urgency} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField fullWidth required id="outlined-required" label="Problema" name="problem" value={patient.problem} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Retorno" name="return_patient" value={patient.return_patient ? "Sim" : "Não"} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<FormControlLabel
										control={ <Switch checked={patient.return_patient}
											onChange={handleInputChange}
											name="return_patient"
											color="primary"
										/>
									}
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Inicio Do Atendimento" name="start_service" value={patient.start_service} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Duração Do Atendimento" name="waiting_service" value={patient.waiting_service} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField fullWidth required id="outlined-required" label="Finalização Do Atendimento" name="end_service" value={patient.end_service} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField fullWidth required id="outlined-required" label="Doutor Atendente" name="attending_doctor" value={patient.attending_doctor} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField fullWidth required id="outlined-required" label="Comorbidades" name="conditions" value={patient.special_conditions.conditions} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField fullWidth required id="outlined-required" label="Medicamentos" name="medicines" value={patient.special_conditions.medicines} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField fullWidth required id="outlined-required" label="Alergias" name="allergies" value={patient.special_conditions.allergies} onChange={handleInputChange} variant="outlined"/>
						</Grid>
						<Grid item xs={12} sm={12}>
            	<TextField fullWidth id="outlined-multiline-static" label="Descrição do Problema" value={patient.description_problem} name="description_problem" onChange={handleInputChange} multiline rows={10} variant="outlined"/>
          	</Grid>
						<Grid item xs={12} container justifyContent="center">
							<Button variant="contained" color="primary" sx={{ width: "20%" }} onClick={addPatient}>
								Salvar
							</Button>
							<Button variant="contained" onClick={handleClose} sx={{ backgroundColor: 'red', marginLeft: "20px", width: "20%" }}>
								Fechar
							</Button>
						</Grid>
					</Grid>
    		</Box>
    	</Modal>
	</div>
  );
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
	height: '45rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};