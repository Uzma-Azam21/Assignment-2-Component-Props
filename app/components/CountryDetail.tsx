import React from "react";

interface CountryDetailProps {
  name: string;
  population: number;
  capital: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({
  name,
  population,
  capital,
}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}>
        <strong>Population:</strong> {population.toLocaleString()}
      </p>
      <p style={styles.detail}>
        <strong>Capital:</strong> {capital}
      </p>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    backgroundColor: "#faefe8", // Light background
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a shadow for effect
    margin: "20px auto", // Center the card on the page
    lineHeight: "1.6", // Spacing between lines
  },
  name: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1548a1", // Green color for the country name
    marginBottom: "10px",
  },
  detail: {
    fontSize: "24px",
    color: "#bf6b11", // Darker color for the text
    marginBottom: "8px",
  },
};

export default CountryDetail;
