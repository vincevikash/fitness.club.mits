import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to [Fitness Club Mits] </Typography>
        <p>
        Welcome to Fitness Club Mits! We are thrilled to introduce you to our premier fitness facility dedicated to helping you achieve your health and wellness goals. Whether you're a beginner or a seasoned fitness enthusiast, we have everything you need to enhance your physical fitness and overall well-being.

At Fitness Club Mits, we pride ourselves on providing a welcoming and inclusive environment for individuals of all fitness levels. Our state-of-the-art facility is equipped with cutting-edge exercise equipment and offers a wide range of fitness programs and services to cater to your specific needs and interests.

When you join Fitness Club Mits, you'll have access to a variety of amenities designed to optimize your fitness journey. Our spacious workout areas feature a diverse selection of cardiovascular machines, weightlifting equipment, and functional training tools. We also offer group exercise classes led by experienced instructors who will motivate and guide you through invigorating sessions such as yoga, Zumba, spin classes, and more.
        </p>
        <br />
        <p>
        To support your fitness goals, we have a team of dedicated and certified personal trainers who can provide individualized guidance and create customized workout plans tailored to your unique needs. They will help you establish realistic objectives and provide ongoing support and accountability throughout your fitness journey.

Additionally, our club offers a range of wellness services to complement your workouts. You can enjoy our relaxing sauna and steam rooms, take advantage of massage therapy sessions to alleviate muscle tension, or consult with our nutrition experts to develop a personalized meal plan that aligns with your fitness goals.

We understand that community and support play crucial roles in maintaining a healthy lifestyle. That's why Fitness Club Mits hosts regular social events, workshops, and challenges to foster a sense of belonging and keep you motivated on your fitness path. You'll have the opportunity to connect with fellow members who share your passion for fitness, creating a supportive network to help you stay committed and inspired.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
