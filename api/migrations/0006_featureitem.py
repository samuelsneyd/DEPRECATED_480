# Generated by Django 4.0.6 on 2022-07-14 09:45

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_image_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='FeatureItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('subtitle', models.CharField(max_length=256)),
                ('description', models.CharField(max_length=4096)),
                ('website', models.CharField(max_length=128)),
                ('tags', multiselectfield.db.fields.MultiSelectField(choices=[('RESTAURANTS', 'Restaurants'), ('MISC', 'Misc')], max_length=16)),
                ('image', models.ImageField(upload_to='staticfiles/images/')),
                ('alt', models.CharField(max_length=128)),
                ('priority', models.IntegerField(default=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]