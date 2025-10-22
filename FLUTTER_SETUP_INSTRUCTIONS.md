# Flutter Login Screen with Supabase Authentication

This folder contains a complete Flutter login screen implementation using Supabase authentication.

## Files Included

1. **flutter_login_screen.dart** - The login screen UI with email/password authentication
2. **flutter_main_setup.dart** - Main app setup with Supabase initialization and auth state management
3. **flutter_pubspec.yaml** - Dependencies configuration

## Features

- ✅ Email & Password Login
- ✅ User Registration (Sign Up)
- ✅ Password Reset via Email
- ✅ Form Validation
- ✅ Loading States
- ✅ Error Handling
- ✅ Password Visibility Toggle
- ✅ Auto-navigation based on auth state
- ✅ Material Design 3 UI

## How to Use in Your Flutter Project

### Step 1: Add Dependencies

Copy the dependencies from `flutter_pubspec.yaml` to your project's `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  supabase_flutter: ^2.0.0
```

Then run:
```bash
flutter pub get
```

### Step 2: Set Up Main Entry Point

Replace your `lib/main.dart` with the content from `flutter_main_setup.dart`.

**Important:** Update your Supabase credentials:
```dart
await Supabase.initialize(
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
);
```

### Step 3: Add Login Screen

Copy `flutter_login_screen.dart` to your `lib/` folder.

### Step 4: Configure Supabase

1. Go to your Supabase project dashboard
2. Navigate to Authentication → Settings
3. Configure email authentication settings
4. Set up redirect URLs if needed

### Step 5: Run Your App

```bash
flutter run
```

## Authentication Flow

1. **Login**: User enters email/password and clicks "Sign In"
2. **Sign Up**: User enters email/password and clicks "Sign Up" (confirmation email sent)
3. **Password Reset**: User enters email and clicks "Forgot Password?"
4. **Auto-redirect**: After successful login, user is redirected to HomeScreen

## Customization

### Change Colors
Modify the theme in `main.dart`:
```dart
theme: ThemeData(
  primarySwatch: Colors.blue, // Change this
  useMaterial3: true,
),
```

### Add Social Auth
Add OAuth providers in the login screen:
```dart
await Supabase.instance.client.auth.signInWithOAuth(
  Provider.google,
);
```

## Security Notes

- Never commit Supabase credentials to version control
- Use environment variables for production apps
- Enable Row Level Security (RLS) in your Supabase database
- Configure proper email templates in Supabase dashboard

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Flutter Docs: https://flutter.dev/docs
- supabase_flutter Package: https://pub.dev/packages/supabase_flutter

## Current Setup

Your Supabase project is already configured with:
- **URL**: https://oagssneldchwljljzlcn.supabase.co
- **Credentials**: Already set in the code (for development only)

⚠️ **Note**: Since Flutter is not available on Replit, you'll need to use these files in a Flutter development environment (Android Studio, VS Code, or your local machine with Flutter SDK installed).
