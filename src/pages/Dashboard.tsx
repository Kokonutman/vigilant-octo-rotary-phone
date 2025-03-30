import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Square, CheckSquare } from 'lucide-react';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { role, name } = location.state || { role: 'Unknown', name: 'User' };
  const [activeTab, setActiveTab] = useState('Doctors');

  const handleLogout = () => {
    navigate('/auth');
  };

  const renderPatientDashboard = () => (
    <div className="space-y-6">
      <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,142,247,0.2)] transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-400">
          <div>
            <div className="mb-4">Full Name: <span className="text-white">Sarah Johnson</span></div>
            <div>Insurance: <span className="text-white">Blue Cross Blue Shield</span></div>
          </div>
          <div>
            <div className="mb-4">Email: <span className="text-white">sarah.j@email.com</span></div>
            <div>Phone: <span className="text-white">(555) 123-4567</span></div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,142,247,0.2)] transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-6">Appointments</h2>
        <div className="text-gray-400">
          Doctor: Dr. Emily Chen<br />
          Date & Time: March 15, 2024 at 2:30 PM<br />
          Reason: Annual Physical Examination
        </div>
      </div>
      <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,142,247,0.2)] transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-6">Medical History</h2>
        <div className="text-gray-400">
          - Seasonal allergies (Diagnosed 2020)<br />
          - Mild asthma (Diagnosed 2018)<br />
          - Annual flu shots up to date<br />
          - Last physical: March 2023
        </div>
      </div>
    </div>
  );

  const renderDoctorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,142,247,0.2)] transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-400">
          <div>
            <div className="mb-4">Name: <span className="text-white">Dr. Emily Chen</span></div>
            <div className="mb-4">Specialty: <span className="text-white">Cardiology</span></div>
            <div>Hospitals: <span className="text-white">Memorial Hospital, City Medical Center</span></div>
          </div>
          <div>
            <div className="mb-4">Email: <span className="text-white">dr.chen@medicall.com</span></div>
            <div>License: <span className="text-white">MC-12345-CA</span></div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,142,247,0.2)] transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-6">Today's Appointments</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#2A2A2A] rounded-lg p-4 text-gray-400">
            <div className="mb-4">Patient: <span className="text-white">John Smith</span></div>
            <div className="mb-4">Hospital: <span className="text-white">Memorial Hospital</span></div>
            <div className="mb-4">Reason: <span className="text-white">Follow-up</span></div>
            <div>Time: <span className="text-white">9:00 AM</span></div>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4 text-gray-400">
            <div className="mb-4">Patient: <span className="text-white">Maria Garcia</span></div>
            <div className="mb-4">Hospital: <span className="text-white">City Medical Center</span></div>
            <div className="mb-4">Reason: <span className="text-white">Consultation</span></div>
            <div>Time: <span className="text-white">11:30 AM</span></div>
          </div>
          <div className="bg-[#2A2A2A] rounded-lg p-4 text-gray-400">
            <div className="mb-4">Patient: <span className="text-white">Sarah Johnson</span></div>
            <div className="mb-4">Hospital: <span className="text-white">Memorial Hospital</span></div>
            <div className="mb-4">Reason: <span className="text-white">Annual Physical</span></div>
            <div>Time: <span className="text-white">2:30 PM</span></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHospitalDashboard = () => {
    const timeSlots = [
      '8 AM - 10 AM',
      '10 AM - 12 PM',
      '12 PM - 2 PM',
      '2 PM - 4 PM',
      '4 PM - 6 PM'
    ];

    const getDayInfo = (dayOffset: number) => {
      const date = new Date();
      date.setDate(date.getDate() + dayOffset);
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
      };
    };

    const renderDoctorsTab = () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Doctors</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors..."
              className="bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8EF7] w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Dr. Emily Chen', specialty: 'Cardiology' },
            { name: 'Dr. Michael Patel', specialty: 'Orthopedics' },
            { name: 'Dr. Sarah Williams', specialty: 'Pediatrics' },
            { name: 'Dr. James Wilson', specialty: 'Neurology' }
          ].map((doctor, doctorIndex) => (
            <div key={doctorIndex} className="bg-[#2A2A2A] rounded-lg p-6">
              <div className="flex items-start gap-8">
                <div className="w-64">
                  <h3 className="text-lg font-medium text-white mb-2">{doctor.name}</h3>
                  <p className="text-gray-400">{doctor.specialty}</p>
                </div>
                <div className="flex-1 grid grid-cols-5 gap-4">
                  {[0, 1, 2, 3, 4].map((dayOffset) => {
                    const { day, date } = getDayInfo(dayOffset);
                    return (
                      <div key={dayOffset} className="bg-[#1E1E1E] rounded-lg p-4">
                        <div className="mb-3">
                          <div className="text-gray-300">{day}</div>
                          <div className="text-gray-400 text-sm">{date}</div>
                        </div>
                        <div className="space-y-2">
                          {timeSlots.map((slot, slotIndex) => {
                            const isChecked = Math.random() > 0.5;
                            return (
                              <div key={slotIndex} className="flex items-center gap-2">
                                {isChecked ? (
                                  <CheckSquare className="h-4 w-4 text-[#4F8EF7]" />
                                ) : (
                                  <Square className="h-4 w-4 text-gray-600" />
                                )}
                                <span className="text-xs text-gray-400">{slot}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const renderPatientsTab = () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Patients</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients..."
              className="bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8EF7] w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        <div className="space-y-4">
          {[
            {
              name: 'John Smith',
              email: 'john.smith@email.com',
              phone: '(555) 123-4567',
              insurance: 'Medicare',
              hasAppointment: true,
              doctor: 'Dr. Emily Chen',
              datetime: 'March 12, 2024 at 9:00 AM',
              reason: 'Follow-up',
              history: 'Hypertension, Type 2 Diabetes',
              prescriptions: 'Lisinopril 10mg, Metformin 500mg'
            },
            {
              name: 'Maria Garcia',
              email: 'maria.g@email.com',
              phone: '(555) 234-5678',
              insurance: 'Blue Shield',
              hasAppointment: true,
              doctor: 'Dr. Michael Patel',
              datetime: 'March 12, 2024 at 11:30 AM',
              reason: 'Consultation',
              history: 'Arthritis, Recent knee surgery',
              prescriptions: 'Ibuprofen 800mg, Tramadol 50mg'
            },
            {
              name: 'David Lee',
              email: 'david.lee@email.com',
              phone: '(555) 345-6789',
              insurance: 'Aetna',
              hasAppointment: false,
              history: 'Asthma, Seasonal allergies',
              prescriptions: 'Albuterol inhaler, Cetirizine 10mg'
            },
            {
              name: 'Sarah Johnson',
              email: 'sarah.j@email.com',
              phone: '(555) 456-7890',
              insurance: 'Blue Cross Blue Shield',
              hasAppointment: true,
              doctor: 'Dr. Emily Chen',
              datetime: 'March 12, 2024 at 2:30 PM',
              reason: 'Annual Physical',
              history: 'Seasonal allergies, Mild asthma',
              prescriptions: 'Fluticasone nasal spray'
            }
          ].map((patient, index) => (
            <div key={index} className="bg-[#2A2A2A] rounded-lg p-6">
              <div className="flex gap-8">
                <div className="w-64 space-y-2">
                  <h3 className="text-lg font-medium text-white">{patient.name}</h3>
                  <p className="text-gray-400">{patient.email}</p>
                  <p className="text-gray-400">{patient.phone}</p>
                  <p className="text-gray-400">{patient.insurance}</p>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="bg-[#1E1E1E] rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Appointments</h4>
                    <div className="text-gray-400 text-sm">
                      {patient.hasAppointment ? (
                        <>
                          <p>Doctor: {patient.doctor}</p>
                          <p>Date & Time: {patient.datetime}</p>
                          <p>Reason: {patient.reason}</p>
                        </>
                      ) : (
                        "No upcoming appointments"
                      )}
                    </div>
                  </div>
                  <div className="bg-[#1E1E1E] rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">History</h4>
                    <p className="text-gray-400 text-sm">{patient.history}</p>
                  </div>
                  <div className="bg-[#1E1E1E] rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Prescriptions</h4>
                    <p className="text-gray-400 text-sm">{patient.prescriptions}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const renderAppointmentsTab = () => (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Appointments</h2>
        <div className="bg-[#2A2A2A] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1E1E1E]">
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Patient</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Doctor</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Date</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Time</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#1E1E1E]/50 transition-colors duration-150">
                <td className="py-4 px-6 text-white">John Smith</td>
                <td className="py-4 px-6 text-white">Dr. Emily Chen</td>
                <td className="py-4 px-6 text-white">March 12, 2024</td>
                <td className="py-4 px-6 text-white">9:00 AM</td>
                <td className="py-4 px-6 text-white">Follow-up</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="border-b border-[#2A2A2A]">
          <div className="grid grid-cols-5 max-w-4xl mx-auto">
            {['Doctors', 'Patients', 'Appointments', 'Prescriptions', 'Symptoms'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-[#4F8EF7] border-b-2 border-[#4F8EF7]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg">
          {activeTab === 'Doctors' ? renderDoctorsTab() : 
           activeTab === 'Patients' ? renderPatientsTab() :
           activeTab === 'Appointments' ? renderAppointmentsTab() : (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">{activeTab}</h2>
              <div className="text-gray-400">Manage {activeTab.toLowerCase()}</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderDashboard = () => {
    switch (role.toLowerCase()) {
      case 'patient':
        return renderPatientDashboard();
      case 'doctor':
        return renderDoctorDashboard();
      case 'hospital':
        return renderHospitalDashboard();
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Navbar */}
      <nav className="bg-[#1E1E1E] border-b border-[#2A2A2A] px-4 py-2.5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-white">
              Medi<span className="text-[#4F8EF7]">Call</span>
            </Link>
          </div>
          <span className="text-gray-300 text-lg">Dashboard - {name}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-1.5 bg-[#2A2A2A] text-[12px] text-[#4F8EF7] rounded-lg hover:bg-[#3A3A3A] transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {renderDashboard()}
      </div>
    </div>
  );
}