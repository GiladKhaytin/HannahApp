import EmailLink from "@/components/EmailLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeBlock() {
  return (
    <View style={styles.block}>
        <Text style={styles.text}>ברוכים הבאים לחנה הדיגיטלית!{'\n'}החנה נוצרה לטובת שימוש באכיפות תנועה ודיגום, וכוללת את כל התקנות של החנה.{'\n'}באפליקציה יכולות להיות שגיאות כתיב, טעויות כתיב, באגים וכדו&apos;. אם מצאתם טעות כלשהי, אנא תשלחו צילום מסך למייל.{'\n'}לעדכונים על האפליקציה תיכנסו לערוץ הוואצפ! </Text>
        <View style={styles.contact}>
            <EmailLink />
            <WhatsAppLink />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 20,
    backgroundColor: 'white',
    direction: 'rtl',
    borderRadius: 15,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10,
  },
});