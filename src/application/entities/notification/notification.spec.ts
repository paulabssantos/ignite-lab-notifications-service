import { NotificationContent } from '../notification/notification-content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy;
  });
});
