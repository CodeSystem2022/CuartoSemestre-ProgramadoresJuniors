# hicimos instalaciones de dependencias y todo lo necesario para un entorno profesional
# dejo los pasos para mis compañeros
'''
Paso 1 -> ls -al ~/.ssh

Paso 2 -> ssh-keygen -t ed25519 -C "tu_correo@mail.com"

Paso 3 -> Enter file in which to save the key (/root/.ssh/id_ed25519):NO COLOCAR NADA SOLO ENTER

Paso 4 -> Enter passphrase (empty for no passphrase): password

Paso 5 -> Enter same passphrase again: password   => ingresamos de nuevo la contraseña

Paso 6 -> The key fingerprint is: nos genera un código personal con nuestro correo

Paso 7 -> eval `ssh-agent -s`  ingresamos este comando press enter

Paso 8 -> ssh-add ~/.ssh/id_ed25519  ingresamos este comando press enter

Paso 9 -> nos pide el password de nuevo => debemos ingresarlo luego enter

Paso 10 -> cat ~/.ssh/id_ed25519.pub   ingresar ahora este comando press enter

Paso 11 -> copy and paste en github.perfil Settings => SSH and GPG Keys 

Paso 12 -> New SSH key

Paso 13 -> Colocar un título

Paso 14 -> Pegar el código que obtuvimos desde la terminal en ubuntu => create

Paso 15 -> ahora hacemos un git push origin master o main => elegir una de las dos

Si elegiste master y era main va a crear la rama master o viceversa.
'''

print('hola desde terminal')