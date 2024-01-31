from django.apps import AppConfig


class ProjectConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'project'

    def ready(self):
<<<<<<< HEAD
        import project.signals  
=======
        import project.signals  
>>>>>>> master
