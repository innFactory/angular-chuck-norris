import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { Home } from './home';

describe('Home Component', () => {
  let spectator: Spectator<Home>;
  const createComponent = createComponentFactory({
    component: Home,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
