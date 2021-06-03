import {
   Switch,
   Route,
   useRouteMatch,
 } from "react-router-dom";

import AllProjects from './projects/AllProjects';
import SPHSim from './projects/SPHSim';
import BouncingBalls from './projects/BouncingBalls';






/**
 * https://blog.pshrmn.com/simple-react-router-v4-tutorial/
 */
const Projects = () => {
   let { path } = useRouteMatch();
   // console.log(path)
   // path == /projects

   return (
      <Switch>
         <Route exact path={path} component={AllProjects} />
         <Route path='/projects/2D-SPH-simulation' component={SPHSim} />
         <Route path={`${path}/bouncing-balls`} component={BouncingBalls} />
      </Switch>
   )
}

export default Projects
