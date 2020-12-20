"use strict";
const React = require("react");
const { Text, Box } = require("ink");

const App = ({ name = "Stranger", from = "neverland" }) => (
	<Box borderStyle="round" borderColor="green">
		<Text>
			Hello,{" "}
			<Text color="green">
				{name} from {from}
			</Text>
		</Text>
	</Box>
);

module.exports = App;
