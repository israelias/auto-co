function skillsMember() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/member-skills.html',
        controller: 'MemberSkillsController',
        controllerAs: 'skills'
    };
}