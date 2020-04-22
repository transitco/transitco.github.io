import Route from '@ember/routing/route';

export default class RoadmapRoute extends Route {
    async model(){
        const response = await fetch('https://api.github.com/repos/transitco/roadmap/issues');
        const issues = await response.json();

        return {issues};
    }
}
