/**
 * @fileOverview layout entry file
 * @author shiwu.wyy@antfin.com
 */

import each from '@antv/util/lib/each';
import Layout from './layout';

import Circular from './circular';
import Concentric from './concentric';
import Dagre from './dagre';
import Force from './force/force';
import G6Force from './g6force';
import Fruchterman from './fruchterman';
import Grid from './grid';
import MDS from './mds';
import Radial from './radial/radial';
import Random from './random';
import ComboForce from './comboForce';

const layouts = {
  circular: Circular,
  concentric: Concentric,
  dagre: Dagre,
  force: Force,
  g6force: G6Force,
  comboForce: ComboForce,
  fruchterman: Fruchterman,
  grid: Grid,
  mds: MDS,
  radial: Radial,
  random: Random,
};

// 注册布局
each(layouts, (layout, type: string) => {
  Layout.registerLayout(type, {}, layout);
});

export default Layout;
