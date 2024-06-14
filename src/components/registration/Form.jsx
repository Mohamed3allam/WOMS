import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [university, setUniversity] = useState('')
    const [college, setCollege] = useState('')
    const [nationalID, setNationalID] = useState('')
    const [GraduationCertificate, setGraduationCertificate] = useState('')
    const [certificate, setCertificate] = useState('')
    const [cv, setCV] = useState('')
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            if (!name || !email || !phone || !country || !birthDate || !specialty || !university || !college || !nationalID || !GraduationCertificate || !cv) {
                setLoading(false)
                throw Error('All Fields must be filled')
            }
            const data = {
                name, 
                email, 
                phone, 
                country, 
                birthDate, 
                specialty, 
                university, 
                college, 
                nationalID, 
                GraduationCertificate, 
                certificate, 
                cv
            }
            const response = await fetch(``,{
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if (response.ok) {
                setError('')
                setLoading(false)
                setSuccess('Form Submitted Successfully .. We will call you ASAP')

                setName('')
                setBirthDate('')
                setCV('')
                setCertificate('')
                setCollege('')
                setCountry('')
                setEmail('')
                setNationalID('')
                setPhone('')
                setSpecialty('')
                setUniversity('')
                setGraduationCertificate('')
            }
        } catch (error) {
            console.log("ERROR IN SUBMITTING DATA")
            setLoading(false)
            setError(error.message)
        }

    }
  return (
    <div className='container col m-5'>
        <Form className='p-5'  style={{border:'1px solid grey',borderRadius:'10px'}}>
            <h2 className='h2'>Registration For Members</h2>
            <div className=' row'>
                <Form.Group controlId="formBasicText" className=" col-12 col-lg-6">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className=" col-12 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </div>
            <div className=' row'>
                <Form.Group controlId="formBasicPhone" className=" col-12 col-lg-6">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className=" col-12 col-lg-6" controlId="formBasicCountry">
                    <Form.Label>Country/Region</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Country" />
                </Form.Group>
            </div>
            <div className=' row'>
                <Form.Group controlId="formBasicDate" className=" col-12 col-lg-6">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date" />
                </Form.Group>
                <Form.Group className=" col-12 col-lg-6" controlId="formBasicSpecialty">
                    <Form.Label>Specialty</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Specialization" />
                </Form.Group>
            </div>
            <div className=' row'>
                <Form.Group controlId="formBasicUniversity" className=" col-12 col-lg-6">
                    <Form.Label>University</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Graduation University" />
                </Form.Group>
                <Form.Group className=" col-12 col-lg-6" controlId="formBasicCollege">
                    <Form.Label>College</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Graduation College" />
                </Form.Group>
            </div>
            <Form.Group controlId="formFileNationalID" className="">
                <Form.Label>National ID Card or Passport</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileGradCert" className="">
                <Form.Label>Graduation Certificate from the College of Medicine.</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileCert" className="">
                <Form.Label>Certificate of Registration in the General Syndicate of Physicians (If Any)</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileCV" className="">
                <Form.Label>CV or Resume</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            <h6 className='text-center h6'>We will contact you as soon as possible</h6>
        </Form>
    </div>
  );
}

export default RegistrationForm;