"use strict";
const React = require("react");
const { Text, Box } = require("ink");

const App = ({ name = "Stranger", from = "Nigeria" }) => (
	<Box borderStyle="round" borderColor="green">
		<Text>
			Hello from {from}, {" "}
			<Text color="green">
				Welcome, {name} from {from}
			</Text>
		</Text>
	</Box>
);

module.exports = App;
