const mysql = require("mysql");
const Config = require("../constants/backendConfig");
var pool = mysql.createPool(Config.mysql.local);

module.exports = {
	executeQuery: function (sql, data, callback) {
		pool.getConnection(function (err, connection) {
			if (err) {
				callback(err);
			} else {
				//console.log(err);// Added comment by Kaustubha to check value of error
				connection.query(sql, data, function (err1, results) {
					console.log(data);
					connection.release();
					callback(err1, results);
					console.log(err1);// Added comment by Kaustubha to check value of error
				});
			}
		});
	}
};