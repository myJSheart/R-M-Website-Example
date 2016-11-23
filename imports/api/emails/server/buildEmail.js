import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';

const buildEmail = ({ title, content, actionsName, actionsUrl }) => {
  const siteName = Meteor.settings.public.siteName;
  const logoUrl = `${Meteor.settings.public.siteUrl}resources/logo.png`;
  return `<mjml>
            <mj-body>
              <mj-container background-color="#d6dde5">
                <mj-section background-color="#ffffff" padding-bottom="20" padding-top="20">
                  <mj-column width="100%" vertical-align="top">
                    <mj-image href="${Meteor.settings.public.siteUrl}" src="${logoUrl}" alt="${siteName}" align="center" border="none" width="182" padding-left="0" padding-right="0" padding-bottom="0" padding-top="0">
                    </mj-image>
                  </mj-column>
                </mj-section>
                <mj-section background-color="#ffffff" padding-bottom="20" padding-top="20">
                  <mj-column width="25%" vertical-align="top">
                  </mj-column>
                  <mj-column width="50%" vertical-align="top">
                    <mj-text align="center" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
                      <p>
                        <span style="color: rgb(106, 138, 162);">
                          <span style="font-weight: bold;">
                            <span style="font-size: 16px;">
                              ${title}
                            </span>
                          </span>
                        </span>
                      </p>
                    </mj-text>
                    <mj-text align="justify" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
                      ${content}
                    </mj-text>
                    <mj-button background-color="#c7896f" color="#FFFFFF" font-size="13" align="center" vertical-align="middle" border="none" padding="15px 30px" border-radius="3px" href="${actionsUrl}" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                      ${actionsName}
                    </mj-button>
                  </mj-column>
                  <mj-column width="25%" vertical-align="top">
                  </mj-column>
                </mj-section>

                <mj-section background-color="#ffffff" padding-bottom="20" padding-top="20">
                  <mj-column width="100%" vertical-align="top">
                    <mj-text align="center" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                      <p>${TAPi18n.__('server.email.questions')}</p>
                      <p>${TAPi18n.__('server.email.contact')}
                        <a href="${TAPi18n.__('server.email.emailaddress')}" style="text-decoration: none; color: inherit;">
                          <span style="font-weight: bold;">${TAPi18n.__('server.email.emailaddress')}</span>
                        </a>
                      </p>
                    </mj-text>
                  </mj-column>
                </mj-section>

                <mj-section background-color="#8bafad" padding-bottom="0" padding-top="0">
                  <mj-column width="33.33333333333333%" vertical-align="top">
                    <mj-image href="${Meteor.settings.public.siteUrl}" src="${logoUrl}" alt="${Meteor.settings.public.siteName}" align="center" border="none" width="77" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">

                    </mj-image>
                  </mj-column>
                  <mj-column width="33.33333333333333%" vertical-align="top">
                    <mj-text align="center" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
                      <p>
                        <a href="https://mjml.io" style="text-decoration: none; color: inherit;">
                        <span style="color: rgb(255, 255, 255);">${TAPi18n.__('server.email.privacy')}</span></a></p>
                    </mj-text>
                  </mj-column>
                </mj-section>
                <mj-section padding-bottom="20" padding-top="20">
                  <mj-column width="100%" vertical-align="middle">
                    <mj-text align="center" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="11" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
                      <p style="font-size:11px">${TAPi18n.__('server.email.unsubscribe')}</p>
                    </mj-text>
                  </mj-column>
                </mj-section>
              </mj-container>
            </mj-body>
        </mjml>`;
};

export default buildEmail;
