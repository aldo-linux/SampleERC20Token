var SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "PaynalliERC20Token", "PET", 18, 1000);
};