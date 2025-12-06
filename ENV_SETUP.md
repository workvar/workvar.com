# Environment Variables Setup

Copy the following variables to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Microsoft Clarity
# Get your Clarity ID from: https://clarity.microsoft.com/
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id

# Google Analytics
# Get your GA4 Measurement ID from: https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
# Get your GTM Container ID from: https://tagmanager.google.com/
# Format: GTM-XXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## How to Get Your IDs:

### Microsoft Clarity
1. Go to https://clarity.microsoft.com/
2. Sign in and create a new project
3. Copy the Project ID from the setup instructions

### Google Analytics
1. Go to https://analytics.google.com/
2. Create a new GA4 property or use an existing one
3. Go to Admin → Data Streams → Web
4. Copy the Measurement ID (starts with G-)

### Google Tag Manager
1. Go to https://tagmanager.google.com/
2. Create a new container or use an existing one
3. Copy the Container ID (starts with GTM-)

## Notes:
- All `NEXT_PUBLIC_*` variables are exposed to the browser
- `SUPABASE_SERVICE_ROLE_KEY` and `RECAPTCHA_SECRET_KEY` are server-side only
- Analytics scripts will only load if their respective IDs are provided
