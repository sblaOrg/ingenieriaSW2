package traveller.interfaz.panel;

import com.toedter.calendar.JDateChooser;
import traveller.dominio.Viaje;
import traveller.dominio.ISistema;
import traveller.dominio.TipoEvento;
import traveller.excepciones.evento.EventoException;
import traveller.excepciones.fecha.FechaException;
import java.awt.Color;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import javax.swing.border.LineBorder;
import traveller.utill.Utilidades;

public class PanelNuevoEvento extends javax.swing.JPanel {
    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

    public PanelNuevoEvento(ISistema sistema) {
        initComponents();
        this.sistema = sistema;
        ArrayList<Viaje> lista = new ArrayList<Viaje>();
        Iterator<Viaje> it = sistema.getUsuarioIdentificado().getListaViajes().iterator();
        while (it.hasNext()) {
            lista.add(it.next());
        }
        listaViajes.setListData(lista.toArray());
        lblRegistered.setVisible(false);
        lblRegistered.setText("Registro Exitoso.");
        lblRegistered.setForeground(Color.RED);
        
         if (this.sistema.esModoDesarrollador()) {
            this.txtNombre.requestFocusInWindow();
            this.txtNombre.setText("Paseo al museo");
            this.txtDescripcion.setText("Visita al Museo Thyssen-Bornemisza.");
            this.txtLugar.setText("Museo Thyssen-Bornemisza");
            this.listaViajes.setSelectedIndex(0);
        } else {
            this.txtNombre.requestFocusInWindow();
        }
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jEditorPane1 = new javax.swing.JEditorPane();
        panelPrincipal = new javax.swing.JPanel();
        panelTitulo = new javax.swing.JPanel();
        etqTitulo = new javax.swing.JLabel();
        panelCrearJugador = new javax.swing.JPanel();
        etqTipo = new javax.swing.JLabel();
        etqFecha = new javax.swing.JLabel();
        btnAceptar = new javax.swing.JButton();
        etqError = new javax.swing.JLabel();
        etqCorrecto = new javax.swing.JLabel();
        comboTipo = new javax.swing.JComboBox();
        etqDescripcion = new javax.swing.JLabel();
        jScrollPane2 = new javax.swing.JScrollPane();
        txtDescripcion = new javax.swing.JTextPane();
        etqNombre = new javax.swing.JLabel();
        txtNombre = new javax.swing.JTextField();
        scrollListaViajes = new javax.swing.JScrollPane();
        listaViajes = new javax.swing.JList();
        etqViaje = new javax.swing.JLabel();
        etqLugar = new javax.swing.JLabel();
        txtLugar = new javax.swing.JTextField();
        etqFechas = new javax.swing.JLabel();
        etqAclaracion = new javax.swing.JLabel();
        jCal = new com.toedter.calendar.JDateChooser();
        lblRegistered = new java.awt.Label();

        jScrollPane1.setViewportView(jEditorPane1);

        setBackground(new java.awt.Color(245, 245, 245));
        setPreferredSize(new java.awt.Dimension(460, 679));

        panelPrincipal.setBackground(new java.awt.Color(245, 245, 245));

        panelTitulo.setBackground(new java.awt.Color(39, 39, 39));
        panelTitulo.setForeground(new java.awt.Color(255, 255, 255));

        etqTitulo.setFont(new java.awt.Font("SansSerif", 0, 18)); // NOI18N
        etqTitulo.setForeground(new java.awt.Color(255, 255, 255));
        etqTitulo.setText("Nuevo evento");

        javax.swing.GroupLayout panelTituloLayout = new javax.swing.GroupLayout(panelTitulo);
        panelTitulo.setLayout(panelTituloLayout);
        panelTituloLayout.setHorizontalGroup(
            panelTituloLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelTituloLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(etqTitulo)
                .addContainerGap(311, Short.MAX_VALUE))
        );
        panelTituloLayout.setVerticalGroup(
            panelTituloLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelTituloLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(etqTitulo)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        panelCrearJugador.setBackground(new java.awt.Color(255, 255, 255));
        panelCrearJugador.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(39, 39, 39), 1, true));
        panelCrearJugador.setMaximumSize(new java.awt.Dimension(380, 290));
        panelCrearJugador.setPreferredSize(new java.awt.Dimension(380, 290));

        etqTipo.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqTipo.setText("Tipo:");

        etqFecha.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqFecha.setText("Fecha:");

        btnAceptar.setBackground(new java.awt.Color(242, 242, 242));
        btnAceptar.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        btnAceptar.setText("Crear evento");
        btnAceptar.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(221, 221, 221), 1, true));
        btnAceptar.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        btnAceptar.setFocusPainted(false);
        btnAceptar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAceptarActionPerformed(evt);
            }
        });

        etqError.setFont(new java.awt.Font("Tahoma", 1, 13)); // NOI18N
        etqError.setForeground(new java.awt.Color(204, 0, 0));
        etqError.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        etqCorrecto.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        etqCorrecto.setForeground(new java.awt.Color(0, 153, 0));

        comboTipo.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "Cultural", "Comercial", "Deportivo", "Familiar", "Laboral", "Otro" }));
        comboTipo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                comboTipoActionPerformed(evt);
            }
        });

        etqDescripcion.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqDescripcion.setText("Descripción:");

        jScrollPane2.setViewportView(txtDescripcion);
        txtDescripcion.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                txtDescripcion.setBorder(new LineBorder(new Color(77,144,254)));
            }
            public void focusLost(java.awt.event.FocusEvent evt) {
                txtDescripcion.setBorder(new LineBorder(new Color(217,217,217)));
            }
        });
        txtDescripcion.addMouseListener(new java.awt.event.MouseAdapter() {

            public void mouseEntered(java.awt.event.MouseEvent evt) {
                if (!txtDescripcion.isFocusOwner()) {
                    txtDescripcion.setBorder(new LineBorder(new Color(185, 185, 185)));
                }
            }

            public void mouseExited(java.awt.event.MouseEvent evt) {
                if (!txtDescripcion.isFocusOwner()) {
                    txtDescripcion.setBorder(new LineBorder(new Color(217, 217, 217)));
                }
            }
        });

        etqNombre.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqNombre.setText("Nombre:");

        txtNombre.setFont(new java.awt.Font("SansSerif", 0, 14)); // NOI18N
        txtNombre.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(217, 217, 217), 1, true));
        txtNombre.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtNombreActionPerformed(evt);
            }
        });
        txtNombre.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                txtNombreKeyReleased(evt);
            }
        });
        txtNombre.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                txtNombre.setBorder(new LineBorder(new Color(77,144,254)));
            }
            public void focusLost(java.awt.event.FocusEvent evt) {
                txtNombre.setBorder(new LineBorder(new Color(217,217,217)));
            }
        });
        txtNombre.addMouseListener(new java.awt.event.MouseAdapter() {

            public void mouseEntered(java.awt.event.MouseEvent evt) {
                if (!txtNombre.isFocusOwner()) {
                    txtNombre.setBorder(new LineBorder(new Color(185, 185, 185)));
                }
            }

            public void mouseExited(java.awt.event.MouseEvent evt) {
                if (!txtNombre.isFocusOwner()) {
                    txtNombre.setBorder(new LineBorder(new Color(217, 217, 217)));
                }
            }
        });

        listaViajes.setFocusable(false);
        listaViajes.setSelectionBackground(new java.awt.Color(39, 39, 39));
        listaViajes.addListSelectionListener(new javax.swing.event.ListSelectionListener() {
            public void valueChanged(javax.swing.event.ListSelectionEvent evt) {
                listaViajesValueChanged(evt);
            }
        });
        scrollListaViajes.setViewportView(listaViajes);

        etqViaje.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqViaje.setText("Viaje:");

        etqLugar.setFont(new java.awt.Font("SansSerif", 0, 17)); // NOI18N
        etqLugar.setText("Lugar:");

        txtLugar.setFont(new java.awt.Font("SansSerif", 0, 14)); // NOI18N
        txtLugar.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(217, 217, 217), 1, true));
        txtLugar.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                txtLugarKeyReleased(evt);
            }
        });
        txtLugar.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                txtLugar.setBorder(new LineBorder(new Color(77,144,254)));
            }
            public void focusLost(java.awt.event.FocusEvent evt) {
                txtLugar.setBorder(new LineBorder(new Color(217,217,217)));
            }
        });
        txtLugar.addMouseListener(new java.awt.event.MouseAdapter() {

            public void mouseEntered(java.awt.event.MouseEvent evt) {
                if (!txtLugar.isFocusOwner()) {
                    txtLugar.setBorder(new LineBorder(new Color(185, 185, 185)));
                }
            }

            public void mouseExited(java.awt.event.MouseEvent evt) {
                if (!txtLugar.isFocusOwner()) {
                    txtLugar.setBorder(new LineBorder(new Color(217, 217, 217)));
                }
            }
        });

        etqFechas.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N

        etqAclaracion.setText("* El proceso de creación del evento prodría demorar unos segundos.");

        jCal.setDateFormatString("dd/MM/yyyy");

        lblRegistered.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        lblRegistered.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        lblRegistered.setForeground(new java.awt.Color(204, 0, 0));
        lblRegistered.setName(""); // NOI18N
        lblRegistered.setText("Registro exitoso.");

        javax.swing.GroupLayout panelCrearJugadorLayout = new javax.swing.GroupLayout(panelCrearJugador);
        panelCrearJugador.setLayout(panelCrearJugadorLayout);
        panelCrearJugadorLayout.setHorizontalGroup(
            panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelCrearJugadorLayout.createSequentialGroup()
                        .addGap(0, 14, Short.MAX_VALUE)
                        .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelCrearJugadorLayout.createSequentialGroup()
                                .addComponent(etqNombre)
                                .addGap(344, 344, 344))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelCrearJugadorLayout.createSequentialGroup()
                                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(etqTipo, javax.swing.GroupLayout.PREFERRED_SIZE, 77, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(etqDescripcion)
                                    .addComponent(etqLugar))
                                .addGap(312, 312, 312))
                            .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                                .addComponent(etqFecha)
                                .addGap(34, 34, 34))))
                    .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                        .addComponent(etqCorrecto, javax.swing.GroupLayout.PREFERRED_SIZE, 342, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 78, Short.MAX_VALUE))))
            .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(etqAclaracion, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                            .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addComponent(etqError, javax.swing.GroupLayout.PREFERRED_SIZE, 387, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                                    .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                                            .addGap(8, 8, 8)
                                            .addComponent(etqFechas, javax.swing.GroupLayout.PREFERRED_SIZE, 147, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                                            .addGap(10, 10, 10)
                                            .addComponent(etqViaje)))
                                    .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addComponent(lblRegistered, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(txtNombre)
                                        .addComponent(txtLugar)
                                        .addComponent(comboTipo, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(jScrollPane2)
                                        .addComponent(scrollListaViajes, javax.swing.GroupLayout.PREFERRED_SIZE, 0, Short.MAX_VALUE)
                                        .addComponent(jCal, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 226, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                        .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                            .addGap(93, 93, 93)
                            .addComponent(btnAceptar, javax.swing.GroupLayout.PREFERRED_SIZE, 207, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addContainerGap())
        );
        panelCrearJugadorLayout.setVerticalGroup(
            panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelCrearJugadorLayout.createSequentialGroup()
                .addContainerGap(18, Short.MAX_VALUE)
                .addComponent(etqError, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(panelCrearJugadorLayout.createSequentialGroup()
                        .addComponent(etqViaje)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(etqFechas, javax.swing.GroupLayout.PREFERRED_SIZE, 21, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(scrollListaViajes, javax.swing.GroupLayout.PREFERRED_SIZE, 63, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(etqNombre)
                    .addComponent(txtNombre, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(etqLugar)
                    .addComponent(txtLugar, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 11, Short.MAX_VALUE)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(etqTipo, javax.swing.GroupLayout.PREFERRED_SIZE, 21, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(comboTipo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(etqFecha)
                    .addComponent(jCal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(40, 40, 40)
                .addGroup(panelCrearJugadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(etqDescripcion)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 11, Short.MAX_VALUE)
                .addComponent(lblRegistered, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(btnAceptar, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(etqAclaracion, javax.swing.GroupLayout.PREFERRED_SIZE, 23, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(52, 52, 52)
                .addComponent(etqCorrecto, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(79, 79, 79))
        );

        javax.swing.GroupLayout panelPrincipalLayout = new javax.swing.GroupLayout(panelPrincipal);
        panelPrincipal.setLayout(panelPrincipalLayout);
        panelPrincipalLayout.setHorizontalGroup(
            panelPrincipalLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelPrincipalLayout.createSequentialGroup()
                .addGroup(panelPrincipalLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(panelTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(panelPrincipalLayout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(panelCrearJugador, javax.swing.GroupLayout.PREFERRED_SIZE, 434, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        panelPrincipalLayout.setVerticalGroup(
            panelPrincipalLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelPrincipalLayout.createSequentialGroup()
                .addComponent(panelTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(20, 20, 20)
                .addComponent(panelCrearJugador, javax.swing.GroupLayout.DEFAULT_SIZE, 686, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(panelPrincipal, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(panelPrincipal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents

    private void txtNombreKeyReleased(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtNombreKeyReleased
        // TODO add your handling code here:
    }//GEN-LAST:event_txtNombreKeyReleased

    private void comboTipoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_comboTipoActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_comboTipoActionPerformed

    private void txtLugarKeyReleased(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_txtLugarKeyReleased
        // TODO add your handling code here:
    }//GEN-LAST:event_txtLugarKeyReleased

    private void listaViajesValueChanged(javax.swing.event.ListSelectionEvent evt) {//GEN-FIRST:event_listaViajesValueChanged
        if (!listaViajes.isSelectionEmpty()) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
            String fechaIni = dateFormat.format(((Viaje) listaViajes.getSelectedValue()).getFechaInicio());
            String fechaFin = dateFormat.format(((Viaje) listaViajes.getSelectedValue()).getFechaFin());
            etqFechas.setText(fechaIni + " - " + fechaFin);
        } else {
            etqFechas.setText("");
        }
    }//GEN-LAST:event_listaViajesValueChanged

    private void btnAceptarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAceptarActionPerformed
        String tipo = (String) comboTipo.getSelectedItem();
        TipoEvento tipoEvento = null;
        if (tipo.equals("Cultural")) {
            tipoEvento = TipoEvento.CULTURAL;
        } else if (tipo.equals("Deportivo")) {
            tipoEvento = TipoEvento.DEPORTIVO;
        } else if (tipo.equals("Comercial")) {
            tipoEvento = TipoEvento.COMERCIAL;
        } else if (tipo.equals("Familiar")) {
            tipoEvento = TipoEvento.FAMILIAR;
        } else if (tipo.equals("Laboral")) {
            tipoEvento = TipoEvento.LABORAL;
        } else if (tipo.equals("Otro")) {
            tipoEvento = TipoEvento.OTRO;
        }
        String[] date = sdf.format(jCal.getDate()).split("/");
        String nombre = txtNombre.getText();
        String dia = date[0];
        String mes = date[1];
        String año = date[2];
        String lugar = txtLugar.getText();
        if (!listaViajes.isSelectionEmpty()) {
            String descripcion = txtDescripcion.getText();
            try {
                ((Viaje) listaViajes.getSelectedValue()).altaEvento(nombre, dia, mes, año, lugar, descripcion, tipoEvento);
                String accion = "<html><b>" + this.sistema.getUsuarioIdentificado().getNombre() + " "
                        + this.sistema.getUsuarioIdentificado().getApellido() + "</b> agregó el evento <i>" + nombre + "</i> al viaje.";
                SimpleDateFormat sdfDate = new SimpleDateFormat("dd/MM/yyyy - HH:mm");
                Date hoy = new Date();
                String strDia = sdfDate.format(hoy);
                ((Viaje) listaViajes.getSelectedValue()).agregarLogAViaje(accion,strDia);
                etqCorrecto.setText("Registro exitoso.");
                etqCorrecto.setEnabled(true);
                lblRegistered.setVisible(true);
                etqError.setText(null);
                inhabilitarCampos();
		
		String mensaje = this.sistema.getUsuarioIdentificado().getNombre() + " " + this.sistema.getUsuarioIdentificado().getApellido() + " agrego el evento " + nombre + " al viaje " + 
			((Viaje) listaViajes.getSelectedValue()).getNombre();
                
                String mensajeEmail = "Le notificamos que el usuario "+this.sistema.getUsuarioIdentificado().getNombre() + " " + this.sistema.getUsuarioIdentificado().getApellido() + " agrego el evento " + nombre + " al viaje " + 
			((Viaje) listaViajes.getSelectedValue()).getNombre() + "\n\n Le recordamos que si no desea ser notificado mediante este medio puede darse"
                        + "de baja seleccionando la opción en 'Mi Cuenta' \n\nGracias,\n\nTraveller.";
                String titulo = this.sistema.getUsuarioIdentificado().getNombre() + " "+this.sistema.getUsuarioIdentificado().getApellido() + " ha modificado un viaje.";
		this.sistema.notificarNovedad(mensaje, mensajeEmail, titulo, (Viaje) listaViajes.getSelectedValue());
                
            } catch (EventoException e) {
                etqError.setText(e.toString());
            } catch (FechaException e) {
                etqError.setText(e.toString());
            }
        } else {
            etqError.setText("Debe seleccionar un viaje.");
        }
    }//GEN-LAST:event_btnAceptarActionPerformed

    private void txtNombreActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtNombreActionPerformed
    }//GEN-LAST:event_txtNombreActionPerformed
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAceptar;
    private javax.swing.JComboBox comboTipo;
    private javax.swing.JLabel etqAclaracion;
    private javax.swing.JLabel etqCorrecto;
    private javax.swing.JLabel etqDescripcion;
    private javax.swing.JLabel etqError;
    private javax.swing.JLabel etqFecha;
    private javax.swing.JLabel etqFechas;
    private javax.swing.JLabel etqLugar;
    private javax.swing.JLabel etqNombre;
    private javax.swing.JLabel etqTipo;
    private javax.swing.JLabel etqTitulo;
    private javax.swing.JLabel etqViaje;
    private com.toedter.calendar.JDateChooser jCal;
    private javax.swing.JEditorPane jEditorPane1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private java.awt.Label lblRegistered;
    private javax.swing.JList listaViajes;
    private javax.swing.JPanel panelCrearJugador;
    private javax.swing.JPanel panelPrincipal;
    private javax.swing.JPanel panelTitulo;
    private javax.swing.JScrollPane scrollListaViajes;
    private javax.swing.JTextPane txtDescripcion;
    private javax.swing.JTextField txtLugar;
    private javax.swing.JTextField txtNombre;
    // End of variables declaration//GEN-END:variables
    private ISistema sistema;

    /**
     * Inhabilita los campos de ingeso de datos.
     */
    private void inhabilitarCampos() {
        jCal.setEnabled(false);
        txtNombre.setEditable(false);
        txtLugar.setEditable(false);
        txtDescripcion.setEditable(false);
        btnAceptar.setEnabled(false);
    }
    
}
