from fpdf import FPDF

WIDTH = 210
HEIGHT = 297

pdf = FPDF()
# compression is not yet supported in py3k version
pdf.compress = False
pdf.add_page()
# Unicode is not yet supported in the py3k version; use windows-1252 standard font
pdf.set_font('Arial', '', 14)
pdf.cell(40, 10, f'Hello world!')



pdf.output('TWYLIS.pdf', 'F')