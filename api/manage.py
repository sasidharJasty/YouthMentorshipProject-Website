#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
<<<<<<< HEAD
=======

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "your_project.settings")

    from django.core.management import execute_from_command_line

    # Enable SSL for the development server
    use_ssl = os.environ.get("USE_SSL", "False").lower() == "true"
    if use_ssl:
        import ssl
        ssl_certificate_path= 'E:\YMP\Ymp2\example.com+5.pem'
        ssl_key_path = 'E:\YMP\Ymp2\example.com+5-key.pem'
        ssl_ctx = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
        ssl_ctx.load_cert_chain(ssl_certificate_path, ssl_key_path)
        execute_from_command_line(["manage.py", "runsslserver", f"--cert={ssl_certificate_path}", f"--key={ssl_key_path}"])
    else:
        execute_from_command_line(sys.argv)
>>>>>>> master
