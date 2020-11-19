import { ReactInstance, Surface } from 'react-360-web';
import SimpleRaycaster from 'simple-raycaster';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);
  buttonsPanel.setAngle(-0.6, 0.1);

  r360.renderToSurface(
    r360.createRoot('ConnectedButtonsPanel', { /* initial props */ }),
    buttonsPanel
  );

  const infoPanel = new Surface(400, 400, Surface.SurfaceShape.Flat);
  infoPanel.setAngle(0.6, 0.1);

  r360.renderToSurface(
    r360.createRoot('ConnectedInfoPanel', { /* initial props */ }),
    infoPanel
  );

  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
  
  // const raycasters = r360.controls.getRaycasters();
  // r360.controls.clearRaycasters();
  // r360.controls.addRaycaster(SimpleRaycaster);
  // r360.controls.addRaycaster(raycasters[1]); // Mouse Raycaster
  // r360.controls.addRaycaster(raycasters[2]); // Touch Raycaster
  // console.log(r360.controls.getRaycasters());
}

window.React360 = {init};
