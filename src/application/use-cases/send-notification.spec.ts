import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotificationUseCase } from './send-notification-use-case';

describe('Send notification', () => {
  test('it should be able to send a notification', () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotificationUseCase(
      NotificationsRepository,
    );

    sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(NotificationsRepository.notifications).toHaveLength(1);
  });
});
