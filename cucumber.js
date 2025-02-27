module.exports = {
  default: {
    require: ["./step-definitions/**/*.ts"], 
    format: ["progress", "json:report/cucumber_report.json"],
    paths: ["features/*.feature"],  
    publishQuiet: true,
    requireModule: ["ts-node/register"], 
  },
};
