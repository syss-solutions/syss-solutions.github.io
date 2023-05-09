Dimension by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Dimension, a fun little one-pager with modal-ized (is that a word?) "pages"
and a cool depth effect (click on a menu item to see what I mean). Simple, fully
responsive, and kitted out with all the usual pre-styled elements you'd expect.
Hope you dig it :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)
		
		




AWS Root User
	
	becaskurtces@gmail.com

AWS IAM User

	kurtces
	676382504583
	
CREACIÓN BUCKET S3 PARA ALOJAR WEB ESTATICA

	https://www.youtube.com/watch?v=0_bFbuJd1Oc			https://techriders.tajamar.es/creacion-de-un-sitio-web-estatico-con-amazon-s3/

	Accedemos, desde el usuario IAM, al servicio de S3 y creamos un bucket. Nombre, "com-syss-static-web-page".
	
	Lo metemos en la región de Irlanda. Para que aloje un sitio web, el bucket tiene que ser público (desactivamos "Block all public access" y activamos 
			"Turning off block all public access might result in this bucket and the objects within becoming public").
	
	El resto de parámetros, los dejamos como están.
	
	Creamos una política para el bucket recién creado para permitir que los objetos alojados en el mismo también tengan acceso público (ya que los buckets no tienen herencia). 
			Accedemos al bucket, y en la pestaña "Permissions" editamos la sección "Bucket policy". Copiamos el arn del bucket, y pulsamos en la opción "Policy Generator".
			Tipo de Política, S3; Effect, Allow; Principal, *; Action, seleccionamos "Get Object"; y pegamos el nombre del ARN, añadiendo /* para que afecte a todos los objetos del bucket.
			Al pulsar "Generate Policy" nos genera un JSON, que copiamos y metemos en la pantalla anterior, y pulsamos "Save Changes".
			
	Subimos los ficheros de nuestro sitio web. En la pestaña de "Objects" de nuestro bucket seleccionamos "upload" y subimos los ficheros.
	
	Accediendo al fichero index.html, obtenemos la url. Vemos la web, pero aún no funciona como un server, sino como un bucket (no salen los 404, etc.).
	
	Para solucionarlo, en la pestaña "Properties" del bucket buscamos la sección "Static website hosting" y editamos. Lo habilitamos e indicamos las páginas de index y de error. Guardamos.
			En la sección "Static website hosting" tendremos ahora la url, y esta ya funcionará como un sitio web.
			

ASOCIAR UN DOMINIO PARA EL SITIO WEB ESTÁTICO DEL BUCKET S3
	
	TODO	https://docs.aws.amazon.com/es_es/Route53/latest/DeveloperGuide/getting-started-s3.html
	
	AWS Policy para usuario IAM
	
		{
			"Version": "2023-05-08",
			"Statement": [
				{
					"Sid": "kurtcesPolicy",
					"Effect": "Allow",
					"Action": [
						"route53:*",
						"route53domains:*",
						"cloudfront:ListDistributions",
						"elasticloadbalancing:DescribeLoadBalancers",
						"elasticbeanstalk:DescribeEnvironments",
						"s3:*",
						"s3-object-lambda:*",
						"ec2:DescribeVpcs",
						"ec2:DescribeVpcEndpoints",
						"ec2:DescribeRegions",
						"sns:ListTopics",
						"sns:ListSubscriptionsByTopic",
						"cloudwatch:DescribeAlarms",
						"cloudwatch:GetMetricStatistics"
					],
					"Resource": "*"
				},
				{
					"Effect": "Allow",
					"Action": "apigateway:GET",
					"Resource": "arn:aws:apigateway:*::/domainnames"
				}
			]
		}
	
	Iniciar sesión como usuario administrativo (IAM) y abre la consola de Route 53 en https://console.aws.amazon.com/route53/.
	
SITIO WEB STATICO.

	Plantillas en https://html5up.net/ (Responsive, HTML5 + CSS3 y 100% Creative Commmons)