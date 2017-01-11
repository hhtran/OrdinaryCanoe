import React, { Component, PropTypes } from "react";

class WeeklyCalendar extends Component {
	render(){
		return (
			<div style={styles.container}>
				<div>
					<h1 style={styles.centered}>Week</h1>
				</div>
				<div style={{...styles.centered, ...styles.daysHeader}}>
					<div>Sunday</div>
					<span>Monday</span>
					<span>Tuesday</span>
					<span>Wednesday</span>
					<span>Thursday</span>
					<span>Friday</span>
					<span>Saturday</span>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		width: "100%",
		backgroundColor: "red",
	},
	centered: {
		textAlign: "center",
		margin: "0 auto"
	},
	daysHeader: {
		display: "flex",
		alignItems: "stretch"
	}
}

export default WeeklyCalendar;