import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class RoadmapRoute extends Route {
    model(){
        return RSVP.hash({
            milestones: fetch('https://api.github.com/repos/transitco/roadmap/milestones'),
            issues: fetch('https://api.github.com/repos/transitco/roadmap/issues')
        })
    }
}
