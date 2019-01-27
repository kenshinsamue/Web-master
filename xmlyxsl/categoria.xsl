<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">




<xsl:template match="/collection">
  <html>
    <body>

        <h1><xsl:value-of select="titulo"/></h1>


        <table border="10">           <!-- Asigna un borde de la tabla de 10  -->
        <tr bgcolor="#9acd32" >            <!-- background verde para las palabras clave -->
          <th>Género</th>
          <th>NºPeliculas</th>
          <th>Rango de estreno</th>
          <th>Pegi medio</th>
        </tr>

      <xsl:for-each select="linea">         <!-- selecciona cada elemento linea del archivo xml  -->
        <xsl:sort select="categoria"/>       <!-- Ordena alfabeticamente los datos  -->
        <tr>
          <td><xsl:value-of select="categoria"/></td>
          <td><xsl:value-of select="numero"/></td>
          <td><xsl:value-of select="rango"/></td>
          <td><xsl:value-of select="pegi"/></td>
        </tr>
      </xsl:for-each>
    </table>
   </body>

  </html>

</xsl:template>




</xsl:stylesheet>
