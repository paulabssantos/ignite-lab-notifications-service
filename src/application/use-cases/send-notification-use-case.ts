import { Notification } from '../entities/notification/notification';
import { NotificationContent } from '../entities/notification/notification-content';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}
export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
