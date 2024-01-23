from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse

from django_rest_passwordreset.signals import reset_password_token_created


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.username,
        'email': reset_password_token.user.email,
        'reset_password_url': "{}?token={}".format(
            instance.request.build_absolute_uri(reverse('password_reset:reset-password-confirm')),
            reset_password_token.key)
    }

    # render email text
    email_plaintext_message = "Hello "+reset_password_token.user.username+", \n\nWe've received a request to reset your password. \nIf this request was not made by you then do not click on the link. \nPlease click on the link to reset your password:" + "{}/reset-password/?token={} \n\nYouth Mentorship Project".format(
            instance.request.META["HTTP_HOST"],
            reset_password_token.key) + ""

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Youth Mentorship Project"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@youthmentorshipproject.org",
        # to:
        [reset_password_token.user.email]
    )
    msg.send()