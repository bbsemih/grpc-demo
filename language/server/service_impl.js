const pb = require("../proto/language_pb");

exports.language = (call, callback) => {
    console.log("Language was invoked!");
    const res = new pb.LanguageResponse()
        .setInfo(`Information: ${call.request.getInfo()}`)
    callback(null, res)
};