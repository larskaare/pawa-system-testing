# Generate or update QR link to repository

The QR code for easily getting the link to the repo should be updated if its URL changes

```shell
python -m venv env
source env/bin/activate
pip install -r requirements.txt
qr 'https://github.com/larskaare/pawa-system-testing/' > ../content/images/repo_qr.png
```
