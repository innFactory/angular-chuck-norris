import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { HomePage } from './home-page';

describe('HomePage Component', () => {
  let spectator: Spectator<HomePage>;
  const createComponent = createComponentFactory({
    component: HomePage,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
