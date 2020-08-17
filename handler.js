"use strict";

module.exports.pre = async (event, context) => {
  event.body = { pre: true };
  console.log("Pre", event.body);
  return { event, context };
};

module.exports.pos = async (event, context) => {
  event.body.pos = true;
  console.log("Pos", event.body);
  return { event, context };
};

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
