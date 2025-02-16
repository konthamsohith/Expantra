{/* Rename from Services.tsx */}
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Globe, Video, Palette, BarChart, FileText, PenTool } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const services = [
  { title: 'GRAPHIC DESIGNING', icon: PenTool, color: '#FF7F50', percentage: 15, angle: 300 },
  { title: 'WEB DEVELOPMENT', icon: Globe, color: '#FF1493', percentage: 20, angle: 0 },
  { title: 'DIGITAL MARKETING', icon: BarChart, color: '#8A2BE2', percentage: 15, angle: 60 },
  { title: 'VIDEO EDITING', icon: Video, color: '#40BB99', percentage: 20, angle: 120 },
  { title: 'PPT DESIGN', icon: FileText, color: '#1E90FF', percentage: 15, angle: 180 },
  { title: 'THUMBNAIL CREATION', icon: Palette, color: '#e4ae30', percentage: 15, angle: 240 },
];

const chartData = {
  labels: services.map((service) => service.title),
  datasets: [
    {
      data: services.map((service) => service.percentage),
      backgroundColor: services.map((service) => service.color),
      borderWidth: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const dataset = context.dataset;
          const total = dataset.data.reduce((acc, value) => acc + value, 0);
          const value = dataset.data[context.dataIndex];
          const percentage = ((value / total) * 100).toFixed(2);
          return `${context.label}: ${percentage}%`;
        },
      },
    },
  },
  cutout: '80%',
  animation: {
    duration: 3000,
    easing: 'easeOutQuart',
  },
};

export default function OurServices() {
  return (
    <section id="services" className="py-16 bg-custom-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700">
            We offer a diverse range of creative and technical services to help bring your ideas to life. Our team specializes in <strong>Graphic Designing</strong>, creating visually stunning designs that capture attention. With <strong>Web Development</strong>, we build responsive and functional websites tailored to your needs. Our <strong>Digital Marketing</strong> strategies ensure your brand reaches the right audience through effective campaigns. <strong>Video Editing</strong> services enhance your content, making it more engaging and professional. We also provide <strong>PPT Design</strong> to create impactful presentations and <strong>Thumbnail Creation</strong> for eye-catching visuals. Whatever your project, we've got the expertise to help you succeed.
          </p>
        </div>

        <div className="lg:w-1/2 relative w-full flex items-center justify-center">
          <Doughnut 
            data={chartData} 
            options={chartOptions}
            className="donut-chart"
          />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-800 text-center">
            Our <br /> Services
          </div>

          {services.map((service, index) => {
            const radius = 210;
            const x = radius * Math.cos((service.angle * Math.PI) / 180);
            const y = radius * Math.sin((service.angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute w-[160px] p-3 text-center rounded-md shadow-lg flex flex-col items-center"
                style={{
                  backgroundColor: service.color,
                  color: '#fff',
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <service.icon className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">{service.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}