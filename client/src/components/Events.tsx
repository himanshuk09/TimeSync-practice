import { Button, MenuItem} from '@mui/material';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import TextField from '@mui/material/TextField/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react'

const Events = () => {
    const [age, setAge] = useState('');
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));



    return (
        <section className="main">
            <div className="main-top">
                <h1>Events</h1>
                <i className="fas fa-user-cog"></i>
            </div>
            <div className=" event-type-box">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Event Type"
                        onChange={event => setAge(event.target.value)}
                    >
                        <MenuItem value={10}>Storts</MenuItem>
                        <MenuItem value={20}>Antaragni</MenuItem>
                        <MenuItem value={30}>Ganesh Chaturthi</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='main-bottom'>
                <div className="main-block">
                    <div className='dummy-div'>
                        <TextField id="outlined-basic" label="Event Title" className='text-field' size='medium' variant="outlined" />
                    </div>
                    <div className='dummy-div dummy'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    label="Start Date"
                                    value={value} className='date-picker'
                                    onChange={(newValue) => setValue(newValue)}
                                />
                                <DatePicker
                                    label="End Date"
                                    value={value} className='date-picker end-date'
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <TextField id="outlined-basic" size='medium' className='text-field' label="Discription" rows={4} multiline={true} variant="outlined" />
                   
                    <Button variant="contained" className='add-btn' size="small">
                        Add Event
                    </Button>
                    
                </div>
                <div className=" right-block">
                    <div className="main-top">
                        <h3>Events</h3>
                    </div>
                    <div className='card-container'>
                        <div className="card">
                            <h5>Event Title</h5>
                            <p>12/03/24</p>
                        </div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>


                    </div>
                </div>

            </div>
        </section >
    )
}
export default Events;