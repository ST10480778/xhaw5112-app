import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";

const { width } = Dimensions.get("window");

// 1. Global Styles (Common to all screens)
export const CommonStyles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.secondartText,
    lineHeight: 24,
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginBottom: 15,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.accent,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: Colors.primary,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});

// 2. App Root Styles (For App.tsx ImageBackground)
export const rootStyles = StyleSheet.create({
  appBackground: {
    flex: 1,
  },
});

// 3. Home Screen Styles
export const homeStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  viewMoreText: {
    color: Colors.primary,
    fontSize: 16,
  },
  cardsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

// 4. Course Card Styles (for HomeCourseCard.tsx)
export const cardStyles = StyleSheet.create({
  card: {
    width: width / 2 - 25, // Adjust for padding: (400 - 40) / 2
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: Colors.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 5,
    height: 40,
  },
  cardPrice: {
    fontSize: 14,
    color: Colors.accent,
    fontWeight: "600",
  },
});

// 5. Accordion Styles (for AccordionItem.tsx)
export const accordionStyles = StyleSheet.create({
  accordionContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.secondary,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
    flexShrink: 1,
    paddingRight: 10,
  },
  content: {
    padding: 15,
    backgroundColor: Colors.background,
  },
  contentText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
});

// 6. Course Detail Styles
export const detailStyles = StyleSheet.create({
  detailImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
  },
  contentPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  pointText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text,
    flex: 1,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.accent,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "right",
  },
});

// 7. Cart/Quote Styles (for CourseSelection, QuoteSummary, PaymentSummary)
export const cartStyles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
    flex: 1,
  },
  cartItemPrice: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: "600",
    marginLeft: 10,
  },
  removeButton: {
    padding: 5,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 15,
  },
  summaryCard: {
    backgroundColor: Colors.aboutBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  costRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  costLabel: {
    fontSize: 16,
    color: Colors.placeholder,
  },
  costValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "500",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.secondary,
  },
  totalLabel: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: "bold",
  },
});

// 8. FAQ Styles
export const faqStyles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.aboutBackground,
    paddingBottom: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
    marginLeft: 8,
  },
  cardText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
});