import {action} from '@storybook/addon-actions';
import {NotificationComponent} from './notification.component';
import {storiesOf} from '@storybook/angular';

storiesOf('Notification', module)
  .add('content', () => ({
    moduleMetadata: {
      declarations: [NotificationComponent],
    },
    template: `<app-notification>Hello world!</app-notification>`,
  }))
  .add('event', () => ({
    component: NotificationComponent,
    props: {
      closed: action('Clicked!'),
    },
  }));
