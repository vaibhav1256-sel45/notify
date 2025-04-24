

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to MyApp! We are dedicated to providing the best service to our users.
        Our mission is to deliver high-quality solutions that make your life easier and more enjoyable.
      </p>
      <p style={styles.paragraph}>
        Founded in 2025, our team is passionate about innovation, user experience, and continuous improvement.
        Thank you for being part of our journey!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
  },
  paragraph: {
    marginBottom: '20px',
    fontSize: '18px',
  },
};

export default AboutUs;
