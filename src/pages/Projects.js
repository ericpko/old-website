import {
   Switch,
   Route,
   useRouteMatch,
 } from "react-router-dom";

import AllProjects from './projects/AllProjects';
import SPHSim from './projects/SPHSim';
import MassSpring1D from "./projects/MassSpring1D";
import MassSpring3D from './projects/MassSpring3D';





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
         <Route path={`${path}/1D-mass-spring`} component={MassSpring1D} />
         <Route path={`${path}/3D-mass-spring-system`} component={MassSpring3D} />
      </Switch>
   )
}

export default Projects
