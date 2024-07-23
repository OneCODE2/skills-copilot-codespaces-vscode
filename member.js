function skillsMember() {
        return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html ' ,
        controller:  'SkillsMemberControlLer',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
        member:"="
        }
    };
    
}