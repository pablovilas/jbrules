_ = require('lodash');

function RuleEngine(rules) {
    this.availableRules = _.chain(rules)
        .filter(function(rule){
            return rule.on == true;
        })
        .sortBy('priority')
        .value();
}

/**
 * Execute rules with fact
 *
 * @param {Object} facts
 * @param {function} cb
 */
RuleEngine.prototype.execute = function (facts, cb) {

    var _facts = facts;
    var _rules = this.availableRules;

    (function run(i){
        if(i < _facts.length){
            var fact = _facts[i];
            (function applyRule(x){
                if(x < _rules.length){
                    var  rule = _rules[x];
                    if(rule.condition(fact)){
                        rule.consequence(fact, function(){
                            applyRule(x+1);
                        });
                    } else {
                        applyRule(x+1);
                    }
                } else {
                    run(i+1);
                }
            })(0);
        } else {
            cb();
        }
    })(0);
};

module.exports = RuleEngine;
