from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from api.sponsor.models import Sponsor, Guest


class SponsorGuestModelTests(TestCase):
    def setUp(self):
        logo_image = SimpleUploadedFile(
            name='test_logo.jpg',
            content=b'\x47\x49\x46\x38\x39\x61',  # Example content for a GIF file
            content_type='image/gif'
        )
        self.sponsor = Sponsor.objects.create(
            name="Test Sponsor",
            logo=logo_image,
            link="https://example.com"
        )
        photo_image = SimpleUploadedFile(
            name='test_photo.jpg',
            content=b'\x47\x49\x46\x38\x39\x61',
            content_type='image/gif'
        )
        self.guest = Guest.objects.create(
            name="Test Guest",
            description="A guest description",
            link="https://guest.example.com",
            photo=photo_image
        )

    def test_sponsor_creation(self):
        self.assertEqual(self.sponsor.name, "Test Sponsor")
        self.assertTrue(self.sponsor.logo.name.startswith('sponsors/logos/'))
        self.assertEqual(self.sponsor.link, "https://example.com")

    def test_guest_creation(self):
        self.assertEqual(self.guest.name, "Test Guest")
        self.assertEqual(self.guest.description, "A guest description")
        self.assertTrue(self.guest.photo.name.startswith('guests/photos/'))
        self.assertEqual(self.guest.link, "https://guest.example.com")
