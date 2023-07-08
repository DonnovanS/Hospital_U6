import express from 'express';
// import doctorRoutes from './routes/doctorRoutes';
// import patientRoutes from './routes/patientRoutes';
// import appointmentRoutes from './routes/appointmentRoutes';

const app = express();
app.use(express.json());
// app.use('/api', doctorRoutes);
// app.use('/api', patientRoutes);
// app.use('/api', appointmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});