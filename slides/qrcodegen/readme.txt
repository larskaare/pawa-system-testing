# Generate or update QR link to repository

The QR code for easily getting the link to the repo should be updated if its URL changes

```
python -m venv env
source env/bin/activate
pip install -r requirements.txt
qr 'https://snykonboarding.app.radix.equinor.com/' > ../content/images/snykonboarding_qr.png
```