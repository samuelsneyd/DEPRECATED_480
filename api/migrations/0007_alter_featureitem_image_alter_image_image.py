# Generated by Django 4.0.6 on 2022-07-15 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_featureitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featureitem',
            name='image',
            field=models.ImageField(upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='media/'),
        ),
    ]