import { NotificationContent } from '../notification/notification-content';

describe('Notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Voce recebeu uma solicitação de amizade',
    );

    expect(content).toBeTruthy();
  });

  test('it should be able to create a notification content with less than 5 characters', () => {
    expect(() => new NotificationContent('aaa')).toThrow();
  });

  test('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});
