import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const experiences = [
  {
    company: "Euronext",
    position: "Tech Lead",
    period: "Jul 2023 - Present · 1 yr 8 mos",
    location: "Porto, Portugal · Remote",
    skills: "AWS Lambda, Node.js, JIRA, Segment Production, Next.js, Accessibility, WCAG, Design Patterns, React.js, Web Analytics",
  },
  {
    company: "WA FENIX",
    position: "Front End Architect",
    period: "Mar 2022 - Present · 3 yrs",
    location: "Lisbon, Portugal · Remote",
    skills: "AngularJS, TypeScript, IBM Cloud, Segment, JIRA, Next.js, JavaScript, SEO, React.js",
  },
  {
    company: "Invillia",
    position: "Frontend Engineer",
    period: "May 2022 - Jun 2023 · 1 yr 2 mos",
    location: "São Paulo, Brazil · Remote",
    skills: "Google Tag Manager, Node.js, Segment, JIRA, Next.js, JavaScript, HubSpot, CSS, HTML5, SEO, Data Analysis, React.js",
  },
];

const ExperienceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Experience</Text>
      <FlatList
        data={experiences}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.position}>{item.position}</Text>
            <Text style={styles.period}>{item.period}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.skills}>Skills: {item.skills}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
  },
  position: {
    fontSize: 16,
    color: "#333",
  },
  period: {
    fontSize: 14,
    color: "#666",
  },
  location: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  skills: {
    fontSize: 14,
    color: "#444",
    marginTop: 5,
  },
});

export default ExperienceScreen;
